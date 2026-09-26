import os
import re
import urllib.parse
import urllib.request

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
# Khôi phục từ backup nếu có để lấy lại đúng link gốc
BACKUP_PATH = os.path.join(CURRENT_DIR, "index.md.bak")
MD_FILE_PATH = os.path.join(CURRENT_DIR, "index.md")

SOURCE_FILE = BACKUP_PATH if os.path.exists(BACKUP_PATH) else MD_FILE_PATH

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept": (
        "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
    ),
    "Accept-Language": "en-US,en;q=0.9,vi;q=0.8",
    "Referer": "https://hackmd.io/",
    "Sec-Ch-Ua": (
        '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"'
    ),
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Sec-Fetch-Dest": "image",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "cross-site",
}


def download_image(url, save_path):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            data = response.read()

        # Kiểm tra Magic Bytes: PNG phải bắt đầu bằng \x89PNG
        if not data.startswith(b"\x89PNG") and not data.startswith(
            b"\xff\xd8\xff"
        ):
            print(f"⚠️ Trả về không phải ảnh (có thể dính HTML): {url}")
            return False

        with open(save_path, "wb") as f:
            f.write(data)
        return True
    except Exception as e:
        print(f"❌ Lỗi tải: {e}")
        return False


def main():
    with open(SOURCE_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    # Match các link ảnh hackmd
    img_pattern = re.compile(r"!\[(.*?)\]\((https?://[^\s\)]+)\)")
    counter = 0

    def replacer(match):
        nonlocal counter
        alt_text = match.group(1)
        img_url = match.group(2)

        # Bỏ qua nếu link đã là ảnh local ./...
        if img_url.startswith("./"):
            return match.group(0)

        parsed_path = urllib.parse.urlparse(img_url).path
        ext = os.path.splitext(parsed_path)[1].lower()
        if not ext or len(ext) > 5:
            ext = ".png"

        img_filename = f"{counter}{ext}"
        save_path = os.path.join(CURRENT_DIR, img_filename)

        print(f"[{counter}] Đang tải: {img_url} -> {img_filename}")
        if download_image(img_url, save_path):
            new_link = f"![{alt_text}](./{img_filename})"
            counter += 1
            return new_link
        else:
            return match.group(0)

    updated_content = img_pattern.sub(replacer, content)

    with open(MD_FILE_PATH, "w", encoding="utf-8") as f:
        f.write(updated_content)

    print("-" * 50)
    print(f" Hoàn tất: Đã tải chuẩn {counter} ảnh hợp lệ.")


if __name__ == "__main__":
    main()
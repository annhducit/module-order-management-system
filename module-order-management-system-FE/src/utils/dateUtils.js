export function formatVietnameseDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('vi-VN');
}
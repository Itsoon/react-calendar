from PIL import Image
import os

directory = "./render/rendering"
img_path_list = os.listdir(directory)


def sort_key(file_name):
    return int(file_name.split("_")[1].split(".")[0])


sorted_img_path_list = sorted(img_path_list, key=sort_key)
# for i in sorted_img_path_list:
#     print(i)
img_lists = []

for filename in sorted_img_path_list:
    full_path = os.path.join(directory, filename)
    img_lists.append(Image.open(full_path))
for img_list in img_lists:
    img_list.convert("RGB")
# print(img_lists)


fileName = "Flowers.pdf"  # Filename of PDF
image1 = img_lists[0]
del img_lists[0]
image1.save(fileName, save_all=True, append_images=img_lists)

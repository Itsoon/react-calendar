from PIL import Image
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains

options = Options()
options.add_argument("--headless")
driver = webdriver.Firefox(options=options)

driver.get("http://localhost:5173/")

time.sleep(3)

elements = driver.find_elements(By.CLASS_NAME, "container")
i = 0
for element in elements:
    screenshot = element.screenshot_as_png

    with open(f"render/rendering/screenshot{i}.png", "wb") as f:
        f.write(screenshot)
    f.close
    i += 1

driver.quit()

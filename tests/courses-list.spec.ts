import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("test");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("test");
  await page.getByRole("button", { name: "Добавить" }).click();
  await page.getByRole("button", { name: "Удалить" }).click();
});

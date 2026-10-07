import { test, expect } from '@playwright/test';

test.describe('Humo Landing', () => {
  test('carga el hero y muestra el tagline', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Soluciones digitales');
    await expect(page.getByText('claras, rápidas')).toBeVisible();
  });

  test('navegación a secciones funciona', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Servicios' }).click();
    await expect(page.locator('#servicios')).toBeInViewport();
  });

  test('botón de WhatsApp está presente', async ({ page }) => {
    await page.goto('/');
    const wa = page.getByRole('link', { name: /WhatsApp/i }).first();
    await expect(wa).toBeVisible();
    await expect(wa).toHaveAttribute('href', /wa\.me/);
  });

  test('menú móvil se abre y cierra', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    const toggle = page.getByLabel('Abrir menú');
    await toggle.click();
    await expect(page.getByRole('navigation', { name: 'Menú móvil' })).toBeVisible();
  });
});

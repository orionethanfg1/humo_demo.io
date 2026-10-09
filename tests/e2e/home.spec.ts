import { test, expect } from '@playwright/test';

test.describe('Humo Landing', () => {
  test('carga el hero y muestra el tagline', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Soluciones digitales');
    await expect(page.getByText('claras, r\u00e1pidas')).toBeVisible();
  });

  test('navegaci\u00f3n a secciones funciona', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Servicios' }).click();
    await expect(page.locator('#servicios')).toBeInViewport();
  });

  test('bot\u00f3n de WhatsApp del header est\u00e1 presente', async ({ page }) => {
    await page.goto('/');
    const wa = page.getByRole('link', { name: /WhatsApp/i }).first();
    await expect(wa).toBeVisible();
    await expect(wa).toHaveAttribute('href', /wa\.me/);
  });

  test('men\u00fa m\u00f3vil se abre y cierra', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    const toggle = page.getByLabel('Abrir men\u00fa');
    await toggle.click();
    await expect(page.getByRole('navigation', { name: 'Men\u00fa m\u00f3vil' })).toBeVisible();
  });

  test('contadores animados est\u00e1n en la p\u00e1gina', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#stats')).toBeVisible();
    await expect(page.locator('[data-counter]')).toHaveCount(3);
  });

  test('formulario de presupuesto abre WhatsApp con contexto', async ({ page, context }) => {
    await page.goto('/');
    await page.locator('#contacto').scrollIntoViewIfNeeded();
    await page.selectOption('#quote-service', { label: 'P\u00e1gina web r\u00e1pida' });
    await page.selectOption('#quote-timeline', { label: 'Esta semana' });
    await page.fill('#quote-name', 'Ana');

    const popupPromise = context.waitForEvent('page');
    await page.getByRole('button', { name: /Continuar en WhatsApp/i }).click();
    const popup = await popupPromise;
    await popup.waitForLoadState();
    expect(popup.url()).toMatch(/wa\.me\/523335982161/);
    expect(decodeURIComponent(popup.url())).toMatch(/P\u00e1gina web r\u00e1pida/);
    expect(decodeURIComponent(popup.url())).toMatch(/Ana/);
  });

  test('demo chat se abre y muestra opciones', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Abrir asistente de demo').click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText(/Qu\u00e9 te interesa explorar/i)).toBeVisible();
    await page.getByRole('button', { name: 'P\u00e1gina web r\u00e1pida' }).click();
    await expect(page.getByText(/En pocos d\u00edas puedes tener una p\u00e1gina/i)).toBeVisible();
  });

  test('demo Brasa Fina aparece en demos', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Brasa Fina' })).toBeVisible();
    await expect(page.getByText(/Restaurante elegante/i)).toBeVisible();
  });
});

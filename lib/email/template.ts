import fs from "fs";
import path from "path";

export type TemplateVariables = Record<string, string | number | boolean>;

/**
 * Purpose: Read and render HTML template files with token replacement.
 * Objectives: unify email rendering for SES transactional sends.
 */
export function renderTemplate(templateName: string, variables: TemplateVariables): string {
  const templatePath = path.join(process.cwd(), "templates", `${templateName}.html`);
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found: ${templatePath}`);
  }
  let html = fs.readFileSync(templatePath, "utf8");
  for (const [key, value] of Object.entries(variables)) {
    const placeholder = `{{${key}}}`;
    const escaped = placeholder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    html = html.replace(new RegExp(escaped, "g"), String(value));
  }
  return html;
}



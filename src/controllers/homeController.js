import { render } from "../config/viewEngine.js";
import * as model from "../models/mahasiswaModel.js";

export const home = async (c) => {
  const mahasiswa = await model.getAll();
  const html = await render("home", {
    title: "Dashboard Bun MVC",
    message: "Hello dari Bun + Tailwind",
    mahasiswa: mahasiswa,
  }, c);
  return c.html(html);
};
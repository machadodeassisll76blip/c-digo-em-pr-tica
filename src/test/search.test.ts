import { describe, expect, it } from "vitest";
import { search } from "@/lib/search/engine";
const ids = (q: string) => search(q).map((r) => r.doc.id);
describe("busca", () => {
  it("tolera erro de digitação", () => expect(ids("flexbx")[0]).toBe("css/flexbox"));
  it("ignora acentos", () => expect(ids("lacos")).toContain("javascript/lacos"));
  it("centralizar -> flexbox e grid", () => { const r = ids("centralizar"); expect(r).toContain("css/flexbox"); expect(r).toContain("css/grid"); });
  it("salvar dados -> localStorage", () => expect(ids("salvar dados")).toContain("javascript/localstorage"));
  it("clicar -> eventos", () => expect(ids("clicar")).toContain("javascript/eventos"));
  it("menu -> media queries", () => expect(ids("menu")).toContain("css/media-queries"));
  it("cor -> variáveis CSS", () => expect(ids("cor")).toContain("css/variaveis-css"));
});

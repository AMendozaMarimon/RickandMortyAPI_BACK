const request = require("supertest");
const { server } = require("../src/app");
const agent = request(server);

describe("Test de RUTAS", () => {
  describe("GET characters/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/characters/1").expect(200);
    }, 10000);
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/characters/1").expect(200);
      const { id, name, species, gender, status, origin, image } =
        response.body;
      expect(id).toBeDefined();
      expect(name).toBeDefined();
      expect(species).toBeDefined();
      expect(gender).toBeDefined();
      expect(status).toBeDefined();
      expect(origin).toBeDefined();
      expect(image).toBeDefined();
    }, 1000);
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/characters/999").expect(500);
    });
    describe("GET /user/login", () => {
      it("Devuelve access: true si se envían credenciales correctas", async () => {
        const response = await agent
          .get("/user/login?email=aymarprueba1@gmail.com&password=aimar02")
          .expect(200);
        expect(response.body).toEqual({ access: true });
      });
    });
    describe("POST", () => {
      const character1 = { id: 1, name: "Messi" };
      const character2 = { id: 2, name: "Ronaldo" };
      it("POST should add the character to the favs", async () => {
        const response = await agent.post("/favorites").send(character1);
        expect(response.body).toContainEqual(character1);
      });
      it("POST should add the second character to the favs", async () => {
        const response = await agent.post("/favorites").send(character2);
        expect(response.body.length).toBe(2);
        expect(response.body).toContainEqual(character1);
        expect(response.body).toContainEqual(character2);
      });
      describe("DELETE", () => {
        it("Should return the previus characters when sending wrong data", async () => {
          const response = await agent.delete("/favorites/68");
          expect(response.body).toContainEqual(character1);
          expect(response.body).toContainEqual(character2);
        });
        it("Should delete the character when sending correct information", async () => {
          const response = await agent.delete("/favorites/2");
          expect(response.body).toContainEqual(character1);
          expect(response.body).not.toContainEqual(character2);
        });
      });
    });
  });
});

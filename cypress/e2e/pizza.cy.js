describe("Pizza Sipariş Formu", () => {
  it("Bir metin giren test", () => {
    const text = "Ahmet Yılmaz";
    cy.visit("http://localhost:5173/siparisFormu");
    cy.get('textarea[name="fullname"]').type(text).should("have.value", text);
  });

  it("Birden fazla malzeme seçilebilen bir test", () => {
    cy.visit("http://localhost:5173/siparisFormu");

    cy.get('input[name="ekMalzeme"]')
      .check(["pepperoni", "sosis", "kanada jambonu", "tavuk ızgara", "soğan"])
      .should("be.checked");

    cy.get('input[name="ekMalzeme"]:checked').should("have.length", 5);
  });

  it("Formu gönderen bir test", () => {
    const fullname = "Mehmet Yıldız";
    const note = "Acılı olmasın lütfen.";
    cy.visit("http://localhost:5173/siparisFormu");

    cy.get('textarea[name="fullname"]').type(fullname);
    cy.get('textarea[name="siparisNotu"]').type(note);

    cy.get('input[name="ekMalzeme"]')
      .check(["pepperoni", "sosis", "kanada jambonu", "tavuk ızgara", "soğan"])
      .should("be.checked");

    cy.get(".submit-button").click();

    cy.url().should("include", "/siparisOzeti");
  });
});

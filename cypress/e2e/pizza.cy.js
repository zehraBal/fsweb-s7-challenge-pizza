describe("Pizza Sipariş Formu", () => {
  it("Bir metin giren test", () => {
    const text = "Ahmet Yılmaz";
    cy.visit("http://localhost:5173/siparisFormu");
    cy.get('input[name="fullname"]').type(text).should("have.value", text);
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

    // Ad Soyad ve Not Ekleme
    cy.get('input[name="fullname"]').type(fullname);
    cy.get('textarea[name="siparisNotu"]').type(note);

    // Pizza Boyutunu Seçme
    cy.get('input[type="radio"][value="Büyük"]').check();

    // Hamur Seçimi
    cy.get('select[name="pizzaHamur"]').select("İnce Hamur");

    // Ek Malzemeleri Seçme
    cy.get('input[name="ekMalzeme"]')
      .check(["pepperoni", "sosis", "kanada jambonu", "tavuk ızgara", "soğan"])
      .should("be.checked");

    // Adet belirleme (Bu kısımda Count bileşeniyle etkileşime girdiğinizi varsayarak butona tıklama işlemi ekliyoruz)
    // Eğer sadece bir adet .count-button varsa, doğrudan seçebiliriz
    cy.get(".count-button")
      .first()
      .within(() => {
        cy.get("button").contains("+").click();
      });

    // Sipariş Ver butonuna tıklama
    cy.get(".submit-button").should("not.be.disabled").click();

    // Başarı durumunu test etme (örn. sipariş özeti sayfasına yönlendirme)
    cy.url().should("include", "/siparisOzeti");
  });
});

const { render, screen } = require("@testing-library/react");
import ErrorDisplay from ".";

test("doğru mesajı gösterir", () => {
  const errorMessage = "404 not found";
  render(<ErrorDisplay message={errorMessage} retry={() => {}} />);

  // doğru hata mesajına sahip yazı var mı ?
  const item = screen.getByText(errorMessage);

  // gereksiz
  // expect(item).toBeInTheDocument();
});

test("tekrar dene butonuna tıklanınca fonksiyon çalışır", () => {});

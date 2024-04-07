const { render, screen } = require("@testing-library/react");
import userEvent from "@testing-library/user-event";
import ErrorDisplay from ".";

describe("error display bileşeni", () => {
  beforeEach(() => {
    console.log("testin çalışmasından hemen önce");
  });

  beforeAll(() => {
    console.log("testin çalışmasından hemen sonra");
  });

  test("doğru mesajı gösterir", () => {
    const errorMessage = "404 not found";
    render(<ErrorDisplay message={errorMessage} retry={() => {}} />);

    // doğru hata mesajına sahip yazı var mı ?
    const item = screen.getByText(errorMessage);

    // gereksiz
    // expect(item).toBeInTheDocument();
  });

  test("tekrar dene butonuna tıklanınca fonksiyon çalışır", async () => {
    // user'ı kur
    const user = userEvent.setup();

    // bir test fonksiyonu oluştur
    const retryMock = jest.fn();

    // bileşeni renderla
    render(<ErrorDisplay message={"xx"} retry={retryMock} />);

    // butonu çağır
    const buttton = screen.getByRole("button");

    // butona tıkla
    await user.click(buttton);

    // fonksiyon çağrıldı mı kontrol et
    expect(retryMock).toHaveBeenCalled();
  });
});

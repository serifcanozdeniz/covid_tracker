const { render, screen } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import DetailPage from "./index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { storeData } from "../../constants";

// test ortamındaki store un kurulumunu yap thunk middleware kullanı
const mockStore = configureStore([thunk]);

test("yüklenme durumunda doğru  bileşenler ekrana basılır", () => {
  // store un yüklenme durumundaki halini simüle et

  const store = mockStore({
    isLoading: true,
    error: false,
    data: null,
  });
  //  bileşeni gerekli, kapsayıcıları tanımlayarak renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );
  // loader ekrana geliyor mu
  screen.getAllByTestId("card-loader");
  screen.getByTestId("header-loader");
});

test("hata durumunda doğru hata bileşeni ekrana basılır", () => {
  // store un hata durumundaki halini simüle et
  const store = mockStore({
    isLoading: true,
    error: "Cannot read properties of undefined (reading 'region')",
    data: null,
  });
  // test edilecek bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  // hatanın mesajını gösteren bileşen ekrana basıldı mı
  screen.getByText(/Cannot read properties/i);
});

test("veri gelme durumunda doğru kartlar ekrana basılır", () => {
  // store un verinin gelme durumundaki halini simüle et
  const store = mockStore(storeData);
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  // *1) ülke detayları ekrana geliyor mu

  // ülke bayrağı ekrana geliyor mu
  const image = screen.getByRole("img");

  // resmin kaynağı doğru mu
  expect(image).toHaveProperty("src", storeData.data.country.flags.svg);

  // ülke başlığı ekrana geliyor muu
  const title = screen.getByTestId("title");

  // başlığın içeriği doğru mu
  expect(title).toHaveTextContent("Brazil");

  //*2) kartlar ekrana geliyor mu

  // covid nesnesini bileşende olduğu gibi diziye çevirdik
  const covidData = Object.entries(storeData.data.covid);

  // dizideki her bir eleman için key ve value değerleri ekrana basılıyor mu kontrol et
  covidData.forEach((item) => {
    // Başlıklar doğru geldi mi
    screen.getAllByText(item[0].split("_").join(" "), { exact: false });

    // değerler doğru geldi mi
    screen.getAllByText(item[1]);
  });
});

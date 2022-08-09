import { useNavigate, useParams } from "react-router-dom";
import Page from "../../components/Page";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  const PRODUCTS = [
    {
      id: "faker.datatype.uuid()",
      cover: `https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fl0olhfn09xcdcb3zrzyfiwf08s6h&w=1920&q=95`,
      name: "product",
      price: "",
      priceSale: "",
      colors: "",
      status: "new",
    },    {
        id: "faker.datatype.uuid()",
        cover: `https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fl0olhfn09xcdcb3zrzyfiwf08s6h&w=1920&q=95`,
        name: "product",
        price: "",
        priceSale: "",
        colors: "",
        status: "new",
      },    {
        id: "faker.datatype.uuid()",
        cover: `https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fl0olhfn09xcdcb3zrzyfiwf08s6h&w=1920&q=95`,
        name: "product",
        price: "",
        priceSale: "",
        colors: "",
        status: "new",
      },    {
        id: "faker.datatype.uuid()",
        cover: `https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fl0olhfn09xcdcb3zrzyfiwf08s6h&w=1920&q=95`,
        name: "product",
        price: "",
        priceSale: "",
        colors: "",
        status: "new",
      },
  ];

  const params = useParams();
  const navigate = useNavigate();

  return (
    <Page title="Projects">
      <ProjectsList projects={PRODUCTS} />
    </Page>
  );
}

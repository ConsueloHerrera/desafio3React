import { pizzaCart} from "../utils/pizzas";
import { Button, Card } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {pizzaCart.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={pizza.img}
                  alt={`Imagen ${pizza.name}`}
                />
                <Card.Body>
                  <Card.Title>{pizza.name}</Card.Title>
                  <Card.Text>
                    <strong>Ingredientes:</strong>{" "}
                    <ul>
                      {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Text>
                    <strong>Precio:</strong> ${pizza.price}
                  </Card.Text>
                  <div className="button-container">
                    <Button variant="light" className="me-2">
                      Ver más
                    </Button>
                    <Button variant="dark">Añadir</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

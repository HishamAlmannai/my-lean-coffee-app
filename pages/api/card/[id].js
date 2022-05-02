import Card from "../../../src/models/Card";
import User from "../../../src/models/User";

export default async function handler(request, response) {
  const { id } = request.query;
  /* const cards = getCards();
  const singleCard = cards.find((card) => card.id === id); */

  if (request.method === "DELETE") {
    const deletedCard = await Card.findByIdAndDelete(id);
    response.status(200).json({ message: "card deleted", card: deletedCard });
  } else if (request.method === "PUT") {
    const data = JSON.parse(request.body);
    const card = await Card.findById(id);
    const changedCard = await Card.findByIdAndUpdate(
      id,
      { content: data.content },
      { new: true }
    );
    const changedUser = await User.findByIdAndUpdate(
      card.user,
      { content: data.name },
      { new: true }
    );
    response
      .status(200)
      .json({ message: "card updated", card: changedCard, changedUser });
  } else {
    const singleCard = await Card.findById(id);
    response.status(200).json(singleCard);
  }
}

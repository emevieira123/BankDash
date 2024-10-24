import { ContentPage } from "../../shared/components/ContentPage";
import { MyCardsAndMyExpense } from "./components/MyCardsAndMyExpense";

export default function Transactions() {
  return (
    <ContentPage title="Transactions">
      <MyCardsAndMyExpense />
    </ContentPage>
  );
}
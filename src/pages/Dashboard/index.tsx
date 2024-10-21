import { ContentPage } from "../../shared/components/ContentPage";
import { ActivitysAndStatistics } from "./components/ActivitysAndStatistics";
import { CardsAndTransactions } from "./components/CardsAndTransactions";

export default function Dashboard() {
  return (
    <ContentPage title="Overview">
      <CardsAndTransactions />
      <ActivitysAndStatistics />
    </ContentPage>
  );
}
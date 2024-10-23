import { ContentPage } from "../../shared/components/ContentPage";
import { ActivitysAndStatistics } from "./components/ActivitysAndStatistics";
import { CardsAndTransactions } from "./components/CardsAndTransactions";
import { QuickTransferAndBalanceHistory } from "./components/QuickTransferAndBalanceHistory";

export default function Dashboard() {
  return (
    <ContentPage title="Overview">
      <CardsAndTransactions />
      <ActivitysAndStatistics />
      <QuickTransferAndBalanceHistory />
    </ContentPage>
  );
}
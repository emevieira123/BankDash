import { BadgeDollarSign, ChartNoAxesCombined, CreditCard, HandCoins, House, Lightbulb, LucideProps, Settings, User, Wrench } from "lucide-react";
import { Path } from "../../../infra/Path";

type MenuProps = {
  label: string;
  path: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
};

export const MenuItems: MenuProps[] = [
  {
    label: "Dashboard",
    path: Path.DASHBOARD,
    icon: House,
  },
  {
    label: "Transactions",
    path: Path.TRANSACTIONS,
    icon: BadgeDollarSign,
  },
  {
    label: "Accounts",
    path: Path.ACCOUNTS,
    icon: User,
  },
  {
    label: "Investments",
    path: Path.INVESTMENTS,
    icon: ChartNoAxesCombined,
  },
  {
    label: "Credit Cards",
    path: Path.CREDIT_CARDS,
    icon: CreditCard,
  },
  {
    label: "Loans",
    path: Path.LOANS,
    icon: HandCoins,
  },
  {
    label: "Services",
    path: Path.SERVICES,
    icon: Wrench,
  },
  {
    label: "My Privileges",
    path: Path.MY_PRIVILEGES,
    icon: Lightbulb,
  },
  {
    label: "Setting",
    path: Path.SETTING,
    icon: Settings,
  },
];

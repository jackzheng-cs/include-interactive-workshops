import "./_globals/globals.scss";
import Workshop2Challenege from "./flexbox-challenge/Wokshop2Challenge";

export const metadata = {
  title: "Workshop 2 Challenge",
  description: "Include Cohort Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="animated-background"></div>
        <Workshop2Challenege />
      </body>
    </html>
  );
}

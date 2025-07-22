export default function Footer({ siteColor }) {
  return (
    <footer
      className="mt-auto py-6 text-center text-white"
      style={{ backgroundColor: siteColor }}
    >
      © AI電鉄株式会社 All rights reserved.
    </footer>
  );
}

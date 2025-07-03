const darkTurquoise = '#00ced1';

export default function CurrentStatus() {
  return (
    <section
      className="py-3 text-center font-semibold text-white"
      style={{ backgroundColor: darkTurquoise }}
    >
      現在の運転状況：通常運転中
    </section>
  );
}

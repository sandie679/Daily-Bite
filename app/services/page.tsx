export default function ServicesPage() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Our Services</h1>

      <ul className="space-y-6">
        <li className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Web Development</h2>
          <p className="text-gray-700">We build responsive and fast websites using the latest technologies.</p>
        </li>

        <li className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">UI/UX Design</h2>
          <p className="text-gray-700">We craft beautiful and user-friendly interfaces for web and mobile apps.</p>
        </li>

        <li className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">SEO Optimization</h2>
          <p className="text-gray-700">We help improve your site’s visibility on search engines like Google.</p>
        </li>
      </ul>
    </main>
  );
}

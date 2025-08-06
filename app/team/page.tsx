export default function TeamPage() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Meet Our Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 border shadow rounded text-center">
          <img
            src="/anni.jpg"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold">Sandra Sibanda</h2>
          <p className="text-sm text-gray-600">Frontend Developer</p>
        </div>

        <div className="bg-white p-4 border shadow rounded text-center">
          <img
            src="/sandi.jpg"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold">Tariro Moyo</h2>
          <p className="text-sm text-gray-600">UI/UX Designer</p>
        </div>

        <div className="bg-white p-4 border shadow rounded text-center">
          <img
            src="/OIP.jpeg"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold">Brian Nyoni</h2>
          <p className="text-sm text-gray-600">Project Manager</p>
        </div>
      </div>
    </main>
  );
}

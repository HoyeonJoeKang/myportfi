export default async function ProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            @{username}
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Profile page coming soon.
          </p>
        </div>
      </div>
    </div>
  )
}
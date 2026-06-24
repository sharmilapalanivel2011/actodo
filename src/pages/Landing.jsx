import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing() {
  const data = useLocation()
  const username = data.state?.user || "User"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-navy-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header username={username} />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card bgcolor="navy" title="📍" subtitle={new Date().toLocaleDateString()} icon="🗓️" />
          <Card bgcolor="sky" title={new Date().toLocaleTimeString().split(':')[0] + ':' + new Date().toLocaleTimeString().split(':')[1]} subtitle="Current Time" icon="⏰" />
          <Card bgcolor="purple" title="⚡" subtitle="Built with React" icon="⚛️" />
        </div>

        {/* Todo Container */}
        <TodoContainer />
      </div>
    </div>
  )
}

export default Landing
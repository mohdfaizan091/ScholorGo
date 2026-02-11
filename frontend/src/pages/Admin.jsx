import axios from "axios";
import { useState, useEffect } from "react";

// ✅ ENV variable - ek baar define karo
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [inquiries, setInquiries] = useState([]);
  const [view, setView] = useState("login");

  // ✅ Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuthenticated(true);
      setView("dashboard");
      fetchInquiries();
    }
  }, []);

  // ✅ LOGIN - ENV based URL
  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/secure-admin/login`,
        { password }
      );

      const { token } = response.data;
      
      localStorage.setItem("adminToken", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      setIsAuthenticated(true);
      setView("dashboard");
      fetchInquiries();
      setPassword("");
      
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  // ✅ LOGOUT
  function handleLogout() {
    localStorage.removeItem("adminToken");
    delete axios.defaults.headers.common["Authorization"];
    setIsAuthenticated(false);
    setView("login");
    setPassword("");
    setInquiries([]);
  }

  // ✅ FETCH INQUIRIES - ENV based URL
  async function fetchInquiries() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/secure-admin/inquiries`
      );
      setInquiries(response.data);
    } catch (error) {
      console.error("Fetch error:", error);
      if (error.response?.status === 401) {
        handleLogout();
      }
    }
  }

  // ✅ EXPORT TO EXCEL - ENV based URL
  async function downloadExcel() {
    try {
      setLoading(true);
      
      const response = await axios.get(
        `${API_BASE_URL}/api/secure-admin/inquiries/export`,
        {
          responseType: "blob"
        }
      );

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `inquiries_${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Export error:", error);
      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        handleLogout();
      } else {
        alert("Export failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  // ✅ LOGIN PAGE
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0A2342] to-[#1E5F5C] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">SG</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#0A2342]">Admin Login</h2>
            <p className="text-gray-600 text-sm mt-2">ScholarGo • Scholarship Ka Saathi</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent"
                required
                placeholder="Enter admin password"
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0A2342] text-white py-3 rounded-lg font-medium hover:bg-[#1E5F5C] transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Verifying...
                </>
              ) : (
                "Sign In to Dashboard"
              )}
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Authorized personnel only
          </p>
        </div>
      </div>
    );
  }

  // ✅ DASHBOARD PAGE (Rest of the code same hai)
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#0A2342] to-[#1E5F5C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SG</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0A2342]">
                Admin Dashboard
              </h1>
            </div>
            <p className="text-gray-600 text-sm ml-13">
              Manage scholarship inquiries and exports
            </p>
          </div>
          
          <button
            onClick={handleLogout}
            className="mt-4 md:mt-0 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="text-sm text-gray-500 mb-1">Total Inquiries</div>
            <div className="text-3xl font-bold text-[#0A2342]">{inquiries.length}</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="text-sm text-gray-500 mb-1">This Month</div>
            <div className="text-3xl font-bold text-[#1E5F5C]">
              {inquiries.filter(i => {
                const date = new Date(i.createdAt);
                const now = new Date();
                return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
              }).length}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="text-sm text-gray-500 mb-1">This Week</div>
            <div className="text-3xl font-bold text-[#1E5F5C]">
              {inquiries.filter(i => {
                const date = new Date(i.createdAt);
                const now = new Date();
                const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                return date >= weekAgo;
              }).length}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="text-sm text-gray-500 mb-1">Today</div>
            <div className="text-3xl font-bold text-[#FFB347]">
              {inquiries.filter(i => {
                const date = new Date(i.createdAt);
                const today = new Date();
                return date.toDateString() === today.toDateString();
              }).length}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={downloadExcel}
            disabled={loading}
            className="bg-[#1E5F5C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0A2342] transition-colors flex items-center space-x-2 disabled:opacity-50 shadow-sm"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Exporting...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Export to Excel</span>
              </>
            )}
          </button>
          
          <button
            onClick={() => setView(view === "inquiries" ? "dashboard" : "inquiries")}
            className="bg-white border border-[#0A2342] text-[#0A2342] px-6 py-3 rounded-lg font-medium hover:bg-[#0A2342] hover:text-white transition-colors flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>{view === "inquiries" ? "Hide Inquiries" : "View All Inquiries"}</span>
          </button>
        </div>

        {/* Inquiries Table */}
        {view === "inquiries" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="font-semibold text-[#0A2342]">Recent Inquiries</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {inquiries.length > 0 ? (
                    inquiries.map((inq) => (
                      <tr key={inq._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{inq.fullName}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{inq.phone}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{inq.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{inq.city}, {inq.state}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(inq.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                        <div className="flex flex-col items-center">
                          <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                          </svg>
                          <p className="text-gray-500">No inquiries yet</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
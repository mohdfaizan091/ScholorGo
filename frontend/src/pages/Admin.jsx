import axios from "axios";

function Admin() {

  async function downloadExcel() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/inquiries/export`,
        {
          headers: {
            "x-admin-key": import.meta.env.VITE_ADMIN_KEY
          },
          responseType: "blob"
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "inquiries.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();

    } catch (error) {
      alert("Unauthorized or error occurred", error);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-6">
        Admin Dashboard
      </h2>

      <button
        onClick={downloadExcel}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Export Inquiries (Excel)
      </button>
    </div>
  );
}

export default Admin;

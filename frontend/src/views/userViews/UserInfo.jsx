import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from "../../components/layouts/Button";
import Title from "../../components/layouts/Title";
import { useNavigate } from "react-router-dom";

export const UserInfo = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    bio: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        navigate("/login"); // Redirige al login si no hay token
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
        setError("No se pudieron cargar los datos del usuario.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);
console.log(userInfo)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = async () => {
    const token = localStorage.getItem("authToken");
    try {
      await axios.put("http://localhost:3000/users/profile", userInfo, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Perfil actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      setError("No se pudo actualizar el perfil.");
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  };
  if (error) {
    return <p>{error}</p>;
  };

  return (
   <>
    <Title title="Tu perfil" />
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
     
      {/* Sidebar */}
      <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-negro-100 top-12">
          <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
          <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white text-negro-900 border rounded-full">
            Mi cuenta
          </a>
          <Link to="/acceso-seguridad">
          <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-negro-900 hover:border hover:rounded-full">Acceso y seguridad</a>
          </Link>
          <Link to="/edit-post">
          <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-negro-900 hover:border hover:rounded-full">Tu artículos de blog</a>
          </Link>
          <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-negro-900 hover:border hover:rounded-full">
            Notificaciones
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-negro-900 hover:border hover:rounded-full">
            Cuenta PRO
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Perfil público</h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-negro-300"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Bordered avatar"
                />
                <div className="flex flex-col space-y-5 sm:ml-8">
                  <Button text="cambiar imagen"/>
                  <Button text="Borrar foto" bg="bg-naranja"/>
                </div>
              </div>

              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-negro-900">
                      Primer nombre
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-negro-50 border border-negro-300 text-negro-900 text-sm rounded-lg focus:ring-negro-500 focus:border-negro-500 block w-full p-2.5"
                      placeholder=""
                      defaultValue="Jane"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-negro-900">
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-negro-50 border border-negro-300 text-negro-900 text-sm rounded-lg focus:ring-negro-500 focus:border-negro-500 block w-full p-2.5"
                      placeholder=""
                      defaultValue="Ferguson"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-negro-900">
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-negro-50 border border-negro-300 text-negro-900 text-sm rounded-lg focus:ring-negro-500 focus:border-negro-500 block w-full p-2.5"
                    placeholder="tu.email@mail.com"
                    required
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label htmlFor="profession" className="block mb-2 text-sm font-medium text-negro-900">
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="profession"
                    className="bg-negro-50 border border-negro-300 text-negro-900 text-sm rounded-lg focus:ring-negro-500 focus:border-negro-500 block w-full p-2.5"
                    placeholder=""
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-negro-900">
                    Bio
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-negro-900 bg-negro-50 rounded-lg border border-negro-300 focus:ring-negro-500 focus:border-negro-500"
                    placeholder="Escribe tu biografía aquí..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <Button text="Guardar"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <main className="w-full min-h-screen py-1">
          <div className="p-2 md:p-4">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Perfil público</h2>
            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="mb-6">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-negro-900">
                  Primer nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-negro-900">
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-negro-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="profession" className="block mb-2 text-sm font-medium text-negro-900">
                  Cargo
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={userInfo.profession}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="bio" className="block mb-2 text-sm font-medium text-negro-900">
                  Biografía
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={userInfo.bio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  rows="4"
                />
              </div>
              <Button text="Guardar" onClick={handleSave} />
            </div>
          </div>
        </main>
      </div>
      </main>
    </div>
    </>
  );
}



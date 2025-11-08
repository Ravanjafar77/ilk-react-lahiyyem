import React, { useState } from "react";
import { Plus, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Footer from "./Footer";
export default function Services() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const medicines = [
    {
      id: 1,
      name: "Aspirin",
      price: 5.99,
      description: "Pain relief and fever reducer",
    },
    {
      id: 2,
      name: "Paracetamol",
      price: 4.5,
      description: "Effective pain and fever treatment",
    },
    {
      id: 3,
      name: "Ibuprofen",
      price: 6.99,
      description: "Anti-inflammatory medication",
    },
    {
      id: 4,
      name: "Amoxicillin",
      price: 12.99,
      description: "Antibiotic for bacterial infections",
    },
    {
      id: 5,
      name: "Vitamin C",
      price: 8.99,
      description: "Immune system support",
    },
    {
      id: 6,
      name: "Vitamin D3",
      price: 9.99,
      description: "Bone and immune health",
    },
    {
      id: 7,
      name: "Omega-3",
      price: 15.99,
      description: "Heart and brain health supplement",
    },
    {
      id: 8,
      name: "Metformin",
      price: 11.99,
      description: "Diabetes management medication",
    },
    {
      id: 9,
      name: "Lisinopril",
      price: 13.99,
      description: "Blood pressure medication",
    },
    {
      id: 10,
      name: "Atorvastatin",
      price: 14.99,
      description: "Cholesterol-lowering medication",
    },
    {
      id: 11,
      name: "Omeprazole",
      price: 10.99,
      description: "Reduces stomach acid",
    },
    {
      id: 12,
      name: "Cetirizine",
      price: 7.99,
      description: "Allergy relief medication",
    },
    {
      id: 13,
      name: "Loratadine",
      price: 7.5,
      description: "Non-drowsy allergy relief",
    },
    {
      id: 14,
      name: "Diphenhydramine",
      price: 6.5,
      description: "Antihistamine for allergies",
    },
    {
      id: 15,
      name: "Cough Syrup",
      price: 8.99,
      description: "Relieves cough symptoms",
    },
    {
      id: 16,
      name: "Nasal Spray",
      price: 9.5,
      description: "Clears nasal congestion",
    },
    {
      id: 17,
      name: "Eye Drops",
      price: 11.99,
      description: "Relieves dry and irritated eyes",
    },
    {
      id: 18,
      name: "Antibacterial Cream",
      price: 7.99,
      description: "Prevents infection in cuts",
    },
    {
      id: 19,
      name: "Hydrocortisone Cream",
      price: 8.5,
      description: "Reduces skin inflammation",
    },
    {
      id: 20,
      name: "Zinc Supplement",
      price: 9.99,
      description: "Supports immune function",
    },
    {
      id: 21,
      name: "Calcium Tablets",
      price: 8.99,
      description: "Bone health support",
    },
    {
      id: 22,
      name: "Iron Supplement",
      price: 10.99,
      description: "Treats iron deficiency",
    },
    {
      id: 23,
      name: "Magnesium",
      price: 11.5,
      description: "Muscle and nerve function",
    },
    {
      id: 24,
      name: "Multivitamin",
      price: 12.99,
      description: "Complete nutritional support",
    },
    {
      id: 25,
      name: "Probiotic",
      price: 16.99,
      description: "Digestive health support",
    },
    {
      id: 26,
      name: "Melatonin",
      price: 9.99,
      description: "Sleep aid supplement",
    },
    {
      id: 27,
      name: "Glucosamine",
      price: 18.99,
      description: "Joint health support",
    },
    {
      id: 28,
      name: "Biotin",
      price: 10.99,
      description: "Hair, skin, and nail health",
    },
    {
      id: 29,
      name: "Folic Acid",
      price: 7.99,
      description: "Essential for cell growth",
    },
    {
      id: 30,
      name: "B-Complex",
      price: 11.99,
      description: "Energy and metabolism support",
    },
    {
      id: 31,
      name: "Coenzyme Q10",
      price: 19.99,
      description: "Cellular energy production",
    },
    {
      id: 32,
      name: "Turmeric Capsules",
      price: 13.99,
      description: "Anti-inflammatory supplement",
    },
    {
      id: 33,
      name: "Ginger Capsules",
      price: 10.99,
      description: "Digestive and nausea relief",
    },
    {
      id: 34,
      name: "Garlic Supplement",
      price: 9.99,
      description: "Cardiovascular health",
    },
    {
      id: 35,
      name: "Echinacea",
      price: 11.99,
      description: "Immune system booster",
    },
    {
      id: 36,
      name: "Valerian Root",
      price: 12.5,
      description: "Natural sleep aid",
    },
    {
      id: 37,
      name: "St. Johns Wort",
      price: 13.99,
      description: "Mood support supplement",
    },
    {
      id: 38,
      name: "Ginkgo Biloba",
      price: 14.99,
      description: "Memory and cognitive support",
    },
    {
      id: 39,
      name: "Milk Thistle",
      price: 15.99,
      description: "Liver health support",
    },
    {
      id: 40,
      name: "Cranberry Extract",
      price: 12.99,
      description: "Urinary tract health",
    },
  ];

  const addToCart = (medicine) => {
    const existingItem = cart.find((item) => item.id === medicine.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === medicine.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="container">
        <div className="oxcare">
          <ul>
            <li>
              <Link to="/">oxcare</Link>
            </li>
          </ul>
        </div>

        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/doctors">Doctors</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
         
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="ls-button">
            <button
              onClick={() => setShowCart(!showCart)}
              style={{
                position: "relative",
                padding: "8px 12px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              <ShoppingCart
                style={{ width: "24px", height: "24px", color: "#16a34a" }}
              />
              {cart.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "5px",
                    background: "#ef4444",
                    color: "white",
                    fontSize: "12px",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cart.length}
                </span>
              )}
            </button>
            <button className="login-btn">Login</button>
            <button className="signup-btn">Signup</button>
          </div>
        </nav>
      </div>

      <div className="doctorabout">
        <img src="/doctor.png" className="doctorphoto" alt="Doctor" />

        <div className="doctortext">
          <h1 className="hero-title">
            We Will Help
            <br />
            You To Improve
            <br />
            Your Mental Health
          </h1>

          <p className="hero-subtitle">
            Eu sit proin amet quis malesuada vitae velit. Vel consectetur nibh
            quis ullamcorper quis. Quam enim tortor, id sed.
          </p>
          <button className="Get-appointment">Get Appointment</button>
          <button className="Find-Specialist">Find Specialist</button>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h3
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Available Medicines
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {medicines.map((medicine) => (
            <div
              key={medicine.id}
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "24px",
                transition: "box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(0,0,0,0.15)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)")
              }
            >
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1f2937",
                  marginBottom: "8px",
                }}
              >
                {medicine.name}
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  marginBottom: "16px",
                }}
              >
                {medicine.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#16a34a",
                  }}
                >
                  ${medicine.price}
                </span>
                <button
                  onClick={() => addToCart(medicine)}
                  style={{
                    background: "#16a34a",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#15803d")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#16a34a")
                  }
                >
                  <Plus style={{ width: "20px", height: "20px" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCart && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000,
          }}
          onClick={() => setShowCart(false)}
        >
          <div
            style={{
              position: "fixed",
              right: 0,
              top: 0,
              height: "100%",
              width: "400px",
              background: "white",
              boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
              padding: "24px",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
                Your Cart
              </h3>
              <button
                onClick={() => setShowCart(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                <X style={{ width: "24px", height: "24px" }} />
              </button>
            </div>

            {cart.length === 0 ? (
              <p
                style={{
                  color: "#6b7280",
                  textAlign: "center",
                  padding: "32px 0",
                }}
              >
                Your cart is empty
              </p>
            ) : (
              <>
                <div style={{ marginBottom: "24px" }}>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        background: "#f9fafb",
                        padding: "16px",
                        borderRadius: "8px",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "start",
                          marginBottom: "8px",
                        }}
                      >
                        <h4 style={{ fontWeight: "600" }}>{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "#ef4444",
                            cursor: "pointer",
                            padding: "0",
                          }}
                        >
                          <X style={{ width: "16px", height: "16px" }} />
                        </button>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            style={{
                              background: "#d1d5db",
                              border: "none",
                              padding: "4px 12px",
                              borderRadius: "4px",
                              cursor: "pointer",
                            }}
                          >
                            -
                          </button>
                          <span style={{ fontWeight: "600" }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            style={{
                              background: "#d1d5db",
                              border: "none",
                              padding: "4px 12px",
                              borderRadius: "4px",
                              cursor: "pointer",
                            }}
                          >
                            +
                          </button>
                        </div>
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "#16a34a",
                          }}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    borderTop: "1px solid #e5e7eb",
                    paddingTop: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Total:
                    </span>
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#16a34a",
                      }}
                    >
                      ${getTotalPrice()}
                    </span>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      background: "#16a34a",
                      color: "white",
                      padding: "12px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background = "#15803d")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "#16a34a")
                    }
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

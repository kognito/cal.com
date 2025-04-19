import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./floorplan.module.css";

const bookedDesks = [
  "h2",
  "zoom-room",
  ...Array.from({ length: 14 }, (_, i) => `p${i + 1}`).filter(
    (id) => !["p6", "p8", "p10", "p13"].includes(id)
  ),
  "n1",
  "n2",
]; // Simulated booked desks

const deskInfo = [
  {
    id: "h1",
    name: "Desk H1",
    link: "/admin/h1-desk",
    top: "72.4%",
    left: "52.2%",
    photo: "/desks/h1.png",
    blurb:
      "Book one of four desks in the Hover desk hub. These can be booked casually on a daily rate.\n\nThis space is on the main floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "h2",
    name: "Desk H2",
    link: "/admin/h2-desk",
    top: "86.6%",
    left: "52.2%",
    photo: "/desks/h1.png",
    blurb:
      "Book one of four desks in the Hover desk hub. These can be booked casually on a daily rate.\n\nThis space is on the main floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "h3",
    name: "Desk H3",
    link: "/admin/h3-desk",
    top: "82.9%",
    left: "45.7%",
    photo: "/desks/h1.png",
    blurb:
      "Book one of four desks in the Hover desk hub. These can be booked casually on a daily rate.\n\nThis space is on the main floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "h4",
    name: "Desk H4",
    link: "/admin/h4-desk",
    top: "68.7%",
    left: "45.7%",
    photo: "/desks/h1.png",
    blurb:
      "Book one of four desks in the Hover desk hub. These can be booked casually on a daily rate.\n\nThis space is on the main floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "meeting-room",
    name: "Meeting Room",
    link: "/admin/meeting-room",
    top: "39.1%",
    left: "30.2%",
    photo: "/rooms/meeting-room.png",
    blurb:
      "Our meeting room seats four in a square room with round table and whiteboard and can be booked in hourly intervals.\n\nThe meeting room is offered free of charge for members.",
  },
  {
    id: "zoom-room",
    name: "Zoom Room",
    link: "/admin/zoom-room",
    top: "10.9%",
    left: "2%",
    photo: "/rooms/zoom-room.png",
    blurb: "Soundproof pod for virtual meetings and calls.",
  },

  // Perch desks (P1–P14)
  {
    id: "p1",
    name: "Perch Desk 1",
    link: "/admin/perch-1",
    top: "9.3%",
    left: "25.5%",
    photo: "/desks/perch1.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "p2",
    name: "Perch Desk 2",
    link: "/admin/perch-2",
    top: "9.2%",
    left: "18.1%",
    photo: "/desks/perch1.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "p3",
    name: "Perch Desk 3",
    link: "/admin/perch-3",
    top: "26%",
    left: "23.9%",
    photo: "/desks/perch1.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "p4",
    name: "Perch Desk 4",
    link: "/admin/perch-4",
    top: "46.5%",
    left: "23.9%",
    photo: "/desks/perch1.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "p5",
    name: "Perch Desk 5",
    link: "/admin/perch-5",
    top: "26%",
    left: "18.6%",
    photo: "/desks/perch1.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "p6",
    name: "Perch Desk 6",
    link: "/admin/perch-6",
    top: "46.5%",
    left: "18.6%",
    photo: "/desks/perch1.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "p7",
    name: "Perch Desk 7",
    link: "/admin/perch-7",
    top: "9.9%",
    left: "10.9%",
    photo: "/desks/perch1.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
    status: "disabled",
  },
  {
    id: "p8",
    name: "Perch Desk 8",
    link: "/admin/perch-8",
    top: "27%",
    left: "10.9%",
    photo: "/desks/perch1.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "p9",
    name: "Perch Desk 9",
    link: "/admin/perch-9",
    top: "56.5%",
    left: "7.8%",
    photo: "/desks/perch2.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
    status: "disabled",
  },
  {
    id: "p10",
    name: "Perch Desk 10",
    link: "/admin/perch-10",
    top: "74%",
    left: "10.8%",
    photo: "/desks/perch2.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "p11",
    name: "Perch Desk 11",
    link: "/admin/perch-11",
    top: "90%",
    left: "10.8%",
    photo: "/desks/perch2.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
    status: "disabled",
  },
  {
    id: "p12",
    name: "Perch Desk 12 (+ screen)",
    link: "/admin/perch-12",
    top: "74%",
    left: "5%",
    photo: "/desks/perch2.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "p13",
    name: "Perch Desk 13",
    link: "/admin/perch-13",
    top: "90%",
    left: "5%",
    photo: "/desks/perch2.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },
  {
    id: "p14",
    name: "Perch Desk 14",
    link: "/admin/perch-14",
    top: "47.5%",
    left: "3.5%",
    photo: "/desks/perch2.jpg",
    blurb:
      "Book a desk in the Perch area.\n\nThis space is on the upper floor and your booking includes use of fibre internet, kitchenette, communal areas and bathroom facilities. Print access can be arranged on request. Access is during working hours for the day of booking.",
  },

  // Nest offices
  {
    id: "n1",
    name: "Nest Office 1",
    link: "/admin/n1",
    top: "90%",
    left: "21%",
    photo: "/rooms/nest.png",
    blurb: "Private Nest office – currently unavailable.",
    status: "disabled",
  },
  {
    id: "n2",
    name: "Nest Office 2",
    link: "/admin/n2",
    top: "90%",
    left: "37.7%",
    photo: "/rooms/nest.png",
    blurb: "Private Nest office – currently unavailable.",
    status: "disabled",
  },
  {
    id: "n3",
    name: "Nest Office 3",
    link: "/admin/n3",
    top: "90%",
    left: "92.7%",
    photo: "/rooms/nest.png",
    blurb: "Private Nest office – available.",
  },
];

const Floorplan = () => {
  type DeskInfo = (typeof deskInfo)[number];
  const [selectedDesk, setSelectedDesk] = useState<DeskInfo | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Desk & Room Booking – Balance Project</title>
      </Head>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#F9F9F9",
        }}>
        <div className="floorplan-wrapper">
          <div
            style={{
              position: "relative",
              width: "90%",
              margin: "0 auto",
            }}>
            <Image
              src="/floorplan.png"
              alt="Balance Project Floorplan"
              layout="responsive"
              width={3838}
              height={1308}
            />

            {deskInfo.map((desk) => {
              const isBooked = bookedDesks.includes(desk.id);
              const isDisabled = desk.status === "disabled";
              const color = isDisabled ? "#88A3B8" : isBooked ? "#DB3546" : "#03BD8B";
              const animation = !isBooked && !isDisabled ? styles.pulse : undefined;

              return isDisabled ? (
                <div
                  title={desk.name}
                  onMouseEnter={() => setHovered(desk.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "absolute",
                    top: desk.top,
                    left: desk.left,
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: color,
                    display: "block",
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`floorplan-wrapper ${animation || ""}`}>
                  {/* <div style={{
                position: 'absolute',
                top: '-22px',
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                fontSize: '0.75rem',
                fontWeight: 500,
                background: '#fff',
                borderRadius: '4px',
                padding: '2px 6px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                zIndex: 1
              }}>
                {desk.name}
              </div> */}
                </div>
              ) : (
                <Link href={desk.link} legacyBehavior key={desk.id}>
                  <a
                    title={desk.name}
                    onMouseEnter={() => setHovered(desk.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedDesk(desk);
                    }}
                    style={{
                      position: "absolute",
                      top: desk.top,
                      left: desk.left,
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: color,
                      display: "block",
                      transform: "translate(-50%, -50%)",
                    }}
                    className={`floorplan-wrapper ${animation || ""}`}>
                    {/* <div style={{
                  position: 'absolute',
                  top: '-22px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  background: '#fff',
                  borderRadius: '4px',
                  padding: '2px 6px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  zIndex: 1
                }}>
                  {desk.name}
                </div> */}
                  </a>
                </Link>
              );
            })}
          </div>
          {selectedDesk && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 200,
              }}
              onClick={() => setSelectedDesk(null)}>
              <div
                style={{
                  background: "#fff",
                  padding: "24px",
                  borderRadius: "10px",
                  maxWidth: "400px",
                  width: "90%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
                onClick={(e) => e.stopPropagation()}>
                <strong style={{ fontSize: "1.2rem" }}>{selectedDesk.name}</strong>
                <Image
                  src={selectedDesk.photo}
                  alt={selectedDesk.name}
                  width={360}
                  height={180}
                  style={{ borderRadius: "8px", margin: "16px 0" }}
                />
                <p style={{ fontSize: "0.95rem" }}>{selectedDesk.blurb}</p>
                <button
                  style={{
                    marginTop: "16px",
                    padding: "10px 16px",
                    background: "#222",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => (window.location.href = selectedDesk.link)}>
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
          color: #1a1a1a;
          background: #f9f9f9;
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
        }
        strong {
          font-weight: 600;
        }
        p {
          margin: 0;
        }
        @media (max-width: 768px) {
          .floorplan-wrapper {
            transform: rotate(90deg);
            transform-origin: center center;
            width: 100vh;
            height: 100vw;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Floorplan;

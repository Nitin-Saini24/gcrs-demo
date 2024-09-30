import React from "react";
import CardData from "../../Components/cards/CardData";
import Page6 from "../Page6";
import Table from "../../Components/table/Table";
import ChatCard from "../../Components/ChatCard/ChatCard";
import MeetingCard from "../../Components/cards/MeetingCard";
import Table2 from "../../Components/table/Table2";
import cardimg1 from "../../assets/img/card/card-1.png";
import cardimg2 from "../../assets/img/card/card-2.png";
import cardimg3 from "../../assets/img/card/card-3.png";
import cardimg4 from "../../assets/img/card/card-4.png";

const columns = [
  { headerName: "Client Name", field: "clientName" },
  { headerName: "Document Name", field: "documentName" },
  { headerName: "Date & Time", field: "dateTime" },
  { headerName: "Action", field: "action" },
];

const data = [
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  // Add more rows as needed
];
const columns2 = [
  { headerName: "Client Name", field: "clientName" },
  { headerName: "Document Name", field: "documentName" },
  { headerName: "Date & Time", field: "dateTime" },
  { headerName: " Latest update", field: "updateTime" },
  { headerName: "Action", field: "action" },
];

const data2 = [
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    updateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    updateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    updateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    updateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    updateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    updateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  {
    clientName: "Oliver",
    documentName: "Logo Agreement",
    dateTime: "15-Aug-2024, 11:15 AM",
    updateTime: "15-Aug-2024, 11:15 AM",
    action: "view",
  },
  // Add more rows as needed
];

export default function DashBoard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        <CardData
          title="Clients"
          total="1025"
          rate="0.43%"
          levelUp
          backgroundColor={"bg-gradient-to-t from-[#0060AB] to-[#008FFF]"}
        >
          <img src={cardimg1}></img>
        </CardData>
        <CardData
          title="Samples"
          total="600"
          rate="4.35%"
          levelUp
          backgroundColor={"bg-gradient-to-t from-[#3c4459] to-[#61888E]"}
        >
          <img src={cardimg2}></img>
        </CardData>
        <CardData
          title="Sample under processing"
          total="40"
          rate="2.59%"
          levelUp
          backgroundColor={"bg-gradient-to-t from-[#37706C] to-[#65BA7E]"}
        >
          <img src={cardimg3}></img>
        </CardData>
        <CardData
          title="Samples Completed"
          total="80"
          rate="0.95%"
          levelDown
          backgroundColor={"bg-gradient-to-t from-[#4A608C] to-[#0060AB] "}
        >
          <img src={cardimg4}></img>
        </CardData>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
        <Page6 table={Table2} data={data} columns={columns} />
        <div className="col-span-12 xl:col-span-8">
          <Table2
            title="New Supplier Document Requests"
            columns={columns}
            data={data}
          />

          <div className="my-5">
            <Table2
              title="New Supplier Document Requests"
              columns={columns}
              data={data}
            />
          </div>
        </div>
        <MeetingCard />
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7">
        <Table2
          title="New Supplier Document Requests"
          columns={columns2}
          data={data2}
        />
      </div>
    </>
  );
}

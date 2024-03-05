import Box from "@mui/material/Box";
import TrelloCard from "./TrelloCard/TrelloCard";

function ListCards({ cards }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: "0 5px",
        m: "0 5px",
        overflowX: "hiden",
        overflowY: "auto",
        maxHeight: (theme) =>
          `calc(
          ${theme.trello.boardContentHeight} - 
          ${theme.spacing(5)} - 
          ${theme.trello.columnHeaderHeight} - 
          ${theme.trello.columnFooterHeight})`,
        // dấu  *::  là custom cho tất cả,  &::  là custom cho cái hiện tại
        "&::-webkit-scrollbar-thumb ": { backgroundColor: "#ced0da" },
        "&::-webkit-scrollbar-thumb:hover ": {
          backgroundColor: "#bfc2cf",
        },
      }}
    >
      {cards?.map((card) => (
        <TrelloCard key={card._id} card={card} />
      ))}
    </Box>
  );
}

export default ListCards;

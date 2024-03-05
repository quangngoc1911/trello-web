import Box from "@mui/material/Box";
import Column from "./Column/Column";
import Button from "@mui/material/Button";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
function ListColumns({ columns }) {
  // <SortableContext> Thành phần yêu cầu bạn chuyển nó vào mảng được sắp xếp của các mã định danh duy nhất được liên kết với mỗi mục
  //  có thể sắp xếp thông qua các mục prop. Mảng này sẽ trông giống như ["1", "2", "3"],
  //  không phải [{id: "1"}, {id: "2}, {id: "3}].Tất cả những gì bạn phải làm là
  //  ánh xạ mảng mục của mình tới một mảng chuỗi đại diện cho các mã định danh duy nhất cho mỗi mục:

  return (
    <SortableContext
      items={columns?.map((c) => c._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          // inherit là kế thừa lại của cha
          bgcolor: "inherit",
          witdh: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hiden",
          "&::-webkit-scrollbar-track": { m: 2 },
        }}
      >
        {columns?.map((column) => (
          <Column key={column._id} column={column} />
        ))}

        {/* Box add new column */}
        <Box
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
            mx: 2, //margin ở trục x 2 sẽ là 16px
            backgroundColor: "#ffffff3d",
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
          }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              color: "white",
              witdh: "100%",
              justifyContent: "flex-start",
              pl: 2.5,
              py: 1,
            }}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
}

export default ListColumns;

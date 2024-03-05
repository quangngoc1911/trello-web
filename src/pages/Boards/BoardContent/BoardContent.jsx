import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { mapOrder } from "/src/utils/sorts.js";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  // const mySensors = useSensors(pointerSensor);
  // ưu tiên sử dụng 2 loại sensor để trải nghiệm trên mobile tốt nhất
  const mySensors = useSensors(mouseSensor, touchSensor);

  const [oderedColumnState, setoderedColumnState] = useState([]);
  useEffect(() => {
    setoderedColumnState(
      mapOrder(board?.columns, board?.columnOrderIds, "_id")
    );
  }, [board]);

  const handleDragEnd = (event) => {
    console.log("first", event);
    const { active, over } = event;
    //Kiểm tra nếu không tồn tại over (do kéo linh tinh ra ngoài thì return luôn để tránh lỗi)
    if (!over) return;
    //nếu vị trí sau khi kéo thả khác với vị trí ban đầu
    if (active.id !== over.id) {
      //lấy vị trí cũ từ active
      const oldIndex = oderedColumnState.findIndex((c) => c._id === active.id);

      //lấy vị trí mới từ over
      const newIndex = oderedColumnState.findIndex((c) => c._id === over.id);

      // Dùng arrayMove của dndKit để sắp xếp lại mảng Columns ban đầu
      const dndoderedColumn = arrayMove(oderedColumnState, oldIndex, newIndex);

      const dndoderedColumnIds = dndoderedColumn.map((c) => c._id);
      //cập nhật lại state ban đầu sau khi kéo thả
      setoderedColumnState(dndoderedColumn);
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          witdh: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumns columns={oderedColumnState} />
      </Box>
    </DndContext>
  );
}

export default BoardContent;

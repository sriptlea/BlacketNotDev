import { memo } from "react";
import { useContextMenu } from "../index";
import { Container, Divider, Item } from "./index";

export default memo(function ContextMenuRenderer() {
    const { contextMenu, visible, contextMenuRef, closeContextMenu } = useContextMenu();

    if (!contextMenu) return null;

    return (
        <Container
            ref={contextMenuRef}
            visible={visible}
            top={contextMenu.y}
            left={contextMenu.x}
        >
            {contextMenu.items.map((item, index) =>
                item?.divider ? (
                    <Divider key={`divider-${index}`} />
                ) : (
                    item && (
                        <Item
                            key={`item-${index}-${item.label}`}
                            icon={item.icon}
                            image={item.image}
                            color={item.color}
                            onClick={() => {
                                item.onClick?.();
                                closeContextMenu();
                            }}
                        >
                            {item.label}
                        </Item>
                    )
                )
            )}
        </Container>
    );
});

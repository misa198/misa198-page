import { FC } from "react";

import {
  BlogCardWrapper,
  BlogCardImageWrapper,
  BlogCardImage,
  BlogCardPreview,
  BlogCardPreviewTitle,
  BlogCardPreviewMeta,
  BlogCardPreviewContent,
} from "./styled";

const BlogCard: FC = () => {
  return (
    <BlogCardWrapper>
      <BlogCardImageWrapper>
        <BlogCardImage src="https://genk.mediacdn.vn/zoom/260_162/139269124445442048/2021/7/6/photo1625564519168-16255645192691492258636.jpg" />
      </BlogCardImageWrapper>
      <BlogCardPreview>
        <BlogCardPreviewTitle>
          10 triệu năm nữa các loài động vật sẽ như thế nào?
        </BlogCardPreviewTitle>
        <BlogCardPreviewMeta>Misa198 • 01/08/2021</BlogCardPreviewMeta>
        <BlogCardPreviewContent>
          10 triệu năm nữa, các loài động vật trên Trái Đất sẽ như thế nào? Một
          nhà điêu khắc và một nhà nghiên cứu đã đưa ra câu trả lời thông qua
          một quá nghiên cứu trình tiến hóa nghiêm ngặt!
        </BlogCardPreviewContent>
      </BlogCardPreview>
    </BlogCardWrapper>
  );
};

export default BlogCard;

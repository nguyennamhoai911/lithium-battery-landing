import { Article, Product, RelatedArticle } from './types';

export const MOCK_ARTICLE: Article = {
  id: 'lithium-vs-lead-acid-2024',
  category: 'Kỹ thuật & Giải pháp',
  title: 'Chuyển đổi sang Pin Lithium-ion: Lợi ích ROI và Hiệu quả vận hành cho Xe nâng Công nghiệp',
  subtitle: 'Phân tích chi tiết tại sao các doanh nghiệp kho vận hàng đầu thế giới đang dần loại bỏ ắc quy chì-axit truyền thống để tối ưu hóa chi phí dài hạn.',
  author: 'Kỹ sư Nguyễn Văn A - Trưởng bộ phận R&D PKG',
  publishDate: '25/04/2026',
  readingTime: '8 phút đọc',
  heroImage: {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
    ratio: '16:9'
  },
  takeaways: [
    {
      title: 'Hiệu quả năng lượng',
      description: 'Pin Lithium-ion có hiệu suất sạc đạt 95%, giúp giảm lãng phí điện năng đáng kể so với ắc quy chì.'
    },
    {
      title: 'Tuổi thọ vượt trội',
      description: 'Vòng đời lên tới 3500+ chu kỳ, gấp 3-4 lần so với công nghệ cũ, giảm tần suất thay thế.'
    },
    {
      title: 'Tối ưu vận hành',
      description: 'Sạc nhanh trong giờ nghỉ (Opportunity charging) loại bỏ hoàn toàn nhu cầu về phòng sạc chuyên dụng.'
    }
  ],
  content: [
    {
      type: 'paragraph',
      headingLarge: 'Bối cảnh ngành Logistic hiện đại',
      body: 'Trong kỷ nguyên của Logistics 4.0, tốc độ và chi phí vận hành là hai yếu tố sống còn. Xe nâng không chỉ là công cụ di chuyển mà đã trở thành mắt xích quan trọng trong hệ thống tự động hóa. Tuy nhiên, rào cản lớn nhất hiện nay là hệ thống lưu trữ năng lượng lỗi thời.'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1621905252507-b35242f8df02?auto=format&fit=crop&q=80&w=2070',
      ratio: '16:9',
      caption: 'Hệ thống pin Lithium PKG tích hợp trong xe nâng công nghiệp đời mới.'
    },
    {
      type: 'paragraph',
      headingSmall: 'Sự khác biệt về công nghệ lõi',
      body: 'Khác với ắc quy chì axit cần bảo trì thường xuyên và châm nước cất, pin Lithium-ion của PKG sử dụng lõi pin LiFePO4 an toàn cao, không phát thải khí độc hại và hoàn toàn bảo trì miễn phí (Zero Maintenance).'
    },
    {
      type: 'table',
      title: 'So sánh thông số kỹ thuật: Lithium PKG vs Chì-Axit',
      headers: ['Thông số', 'PKG Lithium-ion', 'Chì-Axit Truyền thống'],
      rows: [
        ['Tuổi thọ (Chu kỳ)', '3000 - 4500', '1000 - 1500'],
        ['Thời gian sạc', '1 - 2 giờ', '8 - 10 giờ'],
        ['Hiệu suất sạc', '95%', '75-80%'],
        ['Bảo trì', 'Không cần', 'Hàng tuần (Châm nước)'],
        ['Phát thải khí', 'Không', 'Có (Khí Hydro)'],
        ['Trọng lượng', 'Nhẹ hơn 30%', 'Rất nặng']
      ]
    },
    {
      type: 'paragraph',
      headingSmall: 'Phân tích tổng chi phí sở hữu (TCO)',
      body: 'Mặc dù chi phí đầu tư ban đầu của pin Lithium cao hơn, nhưng khi tính toán trên vòng đời 5 năm, doanh nghiệp có thể tiết kiệm tới 40% chi phí vận hành nhờ giảm tiền điện, loại bỏ nhân công bảo trì và tăng thời gian hoạt động của xe.'
    },
    {
      type: 'file',
      title: 'Catalogue Giải pháp Pin Xe nâng PKG 2024',
      format: 'PDF',
      size: '4.5 MB',
      downloadUrl: '#'
    },
    {
      type: 'video',
      title: 'Quy trình sản xuất và kiểm thử tại nhà máy PKG',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ]
};

export const RELATED_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Dòng PKG-48V600-I',
    useCase: 'Chuyên dụng cho xe nâng Reach Truck 2 tấn',
    imageUrl: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: 'p2',
    name: 'PKG Energy Manager',
    useCase: 'Hệ thống giám sát năng lượng thông minh từ xa',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: 'p3',
    name: 'Sạc nhanh công nghiệp PKG',
    useCase: 'Công suất đến 20kW, chuẩn giao diện CAN-bus',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  }
];

export const RELATED_ARTICLES: RelatedArticle[] = [
  {
    id: 'a1',
    title: 'Cách chọn dung lượng pin phù hợp cho kho lạnh',
    category: 'Hướng dẫn',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8619662f5f?auto=format&fit=crop&q=80&w=1000'
  }
];

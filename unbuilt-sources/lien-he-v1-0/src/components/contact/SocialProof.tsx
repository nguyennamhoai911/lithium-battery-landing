import { motion } from 'motion/react';
import { socialPosts } from '../../data';
import { Play, Instagram, Facebook, Youtube, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-medium mb-4">Hoạt động <span className="font-bold">Thực tế</span></h2>
          <p className="text-brand-dark/60 max-w-2xl mx-auto">
            Cập nhật những hình ảnh, video mới nhất về sản phẩm, hoạt động đại lý và các dự án thực tế của PKGbattery trên toàn quốc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-brand-soft shadow-sm hover:shadow-2xl transition-all"
            >
              <img 
                src={post.thumbnail} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" 
                alt={post.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
                  {post.category}
                </span>
                {post.type === "Video" && (
                  <div className="bg-brand-red p-1.5 rounded-full">
                    <Play className="w-3 h-3 text-white fill-current" />
                  </div>
                )}
              </div>

              <div className="absolute bottom-10 left-8 right-8 text-white">
                <h4 className="text-lg font-bold mb-6 leading-tight group-hover:text-brand-red transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between">
                   <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-brand-dark overflow-hidden">
                          <img src={`https://i.pravatar.cc/50?img=${i+20}`} alt="User" />
                        </div>
                      ))}
                      <div className="text-[10px] text-white/60 ml-4 mt-1">+ 1.2k Likes</div>
                   </div>
                   <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-brand-red transition-colors">
                      <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 pt-12 border-t border-brand-soft">
          <p className="text-sm font-bold text-brand-dark/40 uppercase tracking-widest w-full text-center lg:w-auto mb-4 lg:mb-0">Connect with us</p>
          <div className="flex gap-10">
            {[
              { icon: Facebook, label: "Facebook", link: "#", color: "hover:text-[#1877F2]" },
              { icon: Youtube, label: "YouTube", link: "#", color: "hover:text-[#FF0000]" },
              { icon: Linkedin, label: "LinkedIn", link: "#", color: "hover:text-[#0A66C2]" },
              { icon: MessageCircle, label: "Zalo Support", link: "#", color: "hover:text-blue-500" }
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a 
                  key={idx} 
                  href={soc.link} 
                  className={`flex flex-col items-center gap-3 transition-all group ${soc.color}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-soft flex items-center justify-center group-hover:bg-white group-hover:shadow-xl transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark/40 group-hover:text-current">{soc.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-brand-soft/50 border border-white text-center">
          <p className="text-brand-dark/60 italic mb-6 max-w-2xl mx-auto">
            "Chưa sẵn sàng liên hệ ngay? Theo dõi PKGbattery để xem thêm hoạt động thực tế, video sản phẩm và thông tin kỹ thuật trước khi đưa ra quyết định."
          </p>
          <button className="text-brand-red font-bold text-sm underline underline-offset-8 decoration-2 hover:text-brand-dark transition-colors">
            Xem tất cả hoạt động
          </button>
        </div>
      </div>
    </section>
  );
}

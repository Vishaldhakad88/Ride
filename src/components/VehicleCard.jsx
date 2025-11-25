import { motion } from 'framer-motion';

export default function VehicleCard({ name, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group"
    >
      <div className="text-6xl mb-6 group-hover:scale-110 transition">{icon}</div>
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-textgray mt-3">Instant booking • Best rates</p>
    </motion.div>
  );
}
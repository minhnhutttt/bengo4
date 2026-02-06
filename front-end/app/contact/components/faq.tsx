import Link from 'next/link'
import Title from './title'
import Image from "next/image";

type FaqItem = {
  question: string
  href: string
}

type FaqProps = {
  faqs?: FaqItem[]
  className?: string
}

const defaultFaqs: FaqItem[] = []

export default function Faq({ faqs = defaultFaqs, className = '' }: FaqProps) {
  return (
    <div className={className}>
      <Title className='mb-[15px]'>
        よくあるお問い合わせ
      </Title>
      <ul className="mt-4">
        {faqs.map((faq, index) => (
          <li key={index} className="flex items-start gap-2 border-b border-[#ddd] py-[8px]">
            <span className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center">
              <Image src="/icons/icon_faq.png" alt="Q" width={18} height={18} />
            </span>
            <Link href={faq.href} className="text-[#005ebb] hover:underline text-sm">
              {faq.question}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <Link href="/faq" className="text-sm text-gray-600 hover:underline inline-flex items-center gap-1">
          もっと見る
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
        </Link>
      </div>
    </div>
  )
}
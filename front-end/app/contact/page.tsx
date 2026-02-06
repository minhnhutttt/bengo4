import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/common/Breadcrumb";
import Sidebar from "./components/sidebar";
import Link from "next/link";
import Title from "./components/title";
import Faq from "./components/faq";

export default function Contact() {
  const faqs = [
    { question: '投稿した内容を編集や削除することはできますか', href: '/faq/1' },
    { question: '投稿に追加で書き込みをしたいです', href: '/faq/2' },
  ]

  return (
    <main className="">
      <Breadcrumb items={[{ label: 'お問い合わせ' }]} />

      <Container sidebar={<Sidebar />}>
        <Title variant={1} className="mb-[30px]">お問い合わせ</Title>
        <Faq faqs={faqs} />
      </Container>
    </main>
  )
}

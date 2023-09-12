"use client";
import { decrement, increment, incrementByAmount } from "@/lib/redux/features/counter/counterSlice";
import { toggle } from "@/lib/redux/features/theme/themeSlice";
import { RootState } from "@/lib/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.textColors[0]};
  h1 {
    color: ${props => props.theme.colors.textColors[0]}
  }
`;

export default function Home() {
  const router = useRouter();
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <Container>
      <h1>Next App</h1>
      <button onClick={() => router.push("/about")}>Go to Next</button>

      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>Incremenet</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>Up By 20</button>
      <button onClick={() => dispatch(toggle())}>Toggle Theme</button>
    </Container>
  );
}

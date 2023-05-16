import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultThEME } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultThEME}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
    </ThemeProvider>
  );
}

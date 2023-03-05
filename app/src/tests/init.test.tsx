import App from '../App';
import { customRender, screen } from './config';

describe('Testing app initial setup', () => {
  describe('should have render the right elements', () => {
    it('should a h1 tag with hello world content', () => {
      customRender(<App />);
      const title = screen.getByRole('heading', { name: /hello world/i, level: 1 });

      expect(title).toBeInTheDocument();
    });
  });
});

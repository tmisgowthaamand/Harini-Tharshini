import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  fallbackPath?: string;
}

const BackButton = ({ 
  className = '', 
  variant = 'outline', 
  size = 'default',
  fallbackPath = '/'
}: BackButtonProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to home page if no history
      navigate(fallbackPath);
    }
  };

  return (
    <Button
      onClick={handleGoBack}
      variant={variant}
      size={size}
      className={`flex items-center gap-2 ${className}`}
    >
      <ArrowLeft size={16} />
      Back
    </Button>
  );
};

export default BackButton;

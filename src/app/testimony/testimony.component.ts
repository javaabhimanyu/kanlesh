import { Component } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css'],
})
export class TestimonyComponent {
  data = [
    {
      name: 'Shaswat Bisoyi',
      role: 'UI/UX Designer',
      quote: 'Customer Experience Management will be the future',
      description:
        'Turn everyday interactions into lasting customer relationships using predictive AI and intelligent automation. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'John Doe',
      role: 'Software Engineer',
      quote: 'Innovation is the key to success',
      description:
        'Turn everyday interactions into lasting customer relationships using predictive AI and intelligent automation. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      quote: 'Focus on the user and all else will follow',
      description:
        'Turn everyday interactions into lasting customer relationships using predictive AI and intelligent automation. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
  ];
}

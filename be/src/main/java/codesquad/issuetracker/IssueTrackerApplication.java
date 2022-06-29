package codesquad.issuetracker;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class IssueTrackerApplication {

	public static final String APPLICATION_LOCATIONS = "spring.config.location="
		+ "classpath:application.yml,"
		+ "classpath:aws.yml";

	public static void main(String[] args) {
		new SpringApplicationBuilder(IssueTrackerApplication.class)
			.properties(APPLICATION_LOCATIONS)
			.run(args);
	}
}

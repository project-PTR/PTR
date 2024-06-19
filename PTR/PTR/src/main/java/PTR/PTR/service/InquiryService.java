package PTR.PTR.service;

import PTR.PTR.model.Inquiry;
import PTR.PTR.model.User;
import PTR.PTR.repository.InquiryRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class InquiryService {
    InquiryRepository inquiryRepository;

    public InquiryService(InquiryRepository inquiryRepository) {
        this.inquiryRepository = inquiryRepository;
    }

    public Inquiry askInquiry(Inquiry inquiry){
        inquiry.setCreatedAt(LocalDateTime.now());
        return inquiryRepository.save(inquiry);
    }

    public List<Inquiry> findInquiry(){
        return inquiryRepository.findAll();
    }

    public List<Inquiry> myInquiry(User user){
        return inquiryRepository.findByUser(user);
    }
}
